module Main.State exposing (..)

import Main.Types exposing (Model, Msg(..), Route(..))
import Main.Rest exposing (fetchCurrentUser, fetchLanguages)
import Navigation exposing (Location)
import Routing exposing (parseLocation)
import SignIn.State
import SignIn.Types


-- INIT


initialModel : Route -> Model
initialModel route =
    { route = route
    , signInModel = SignIn.State.init
    , authToken = Nothing
    , currentUser = Nothing
    , languages = []
    }


init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            Routing.parseLocation location
    in
        ( initialModel currentRoute, fetchLanguages )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UrlChange location ->
            let
                newRoute =
                    parseLocation location
            in
                ( { model | route = newRoute }, Cmd.none )

        SignInMsg subMsg ->
            signInUpdate subMsg model

        ReceiveCurrentUser result ->
            case result of
                Ok user ->
                    ( { model | currentUser = Just user }, Cmd.none )

                Err _ ->
                    ( { model | currentUser = Nothing }, Cmd.none )

        ReceiveLanguages languages ->
            ( { model | languages = Debug.log "languages" languages }, Cmd.none )


signInUpdate : SignIn.Types.Msg -> Model -> ( Model, Cmd Msg )
signInUpdate msg model =
    case msg of
        SignIn.Types.SignIn (Ok token) ->
            let
                authToken =
                    Just token
            in
                ( { model | authToken = authToken }, fetchCurrentUser authToken )

        _ ->
            let
                ( updatedSignInModel, signInCmd ) =
                    SignIn.State.update msg model.signInModel
            in
                ( { model | signInModel = updatedSignInModel }, Cmd.map SignInMsg signInCmd )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
