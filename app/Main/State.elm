module Main.State exposing (..)

import Main.Types exposing (Model, Msg(..), Route(..))
import Navigation exposing (Location)
import Routing exposing (parseLocation)
import SignIn.State


-- INIT


initialModel : Route -> Model
initialModel route =
    { route = route
    , signInModel = SignIn.State.init
    }


init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            Routing.parseLocation location
    in
        ( initialModel currentRoute, Cmd.none )



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
            let
                ( updatedSignInModel, signInCmd ) =
                    SignIn.State.update subMsg model.signInModel
            in
                ( { model | signInModel = updatedSignInModel }, Cmd.map SignInMsg signInCmd )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
