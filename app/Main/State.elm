port module Main.State exposing (..)

import Main.Types exposing (Model, Msg(..), Route(..), User)
import Main.Rest exposing (fetchCurrentUser, fetchLanguages)
import Navigation exposing (Location)
import Routing exposing (parseLocation)
import SignIn.State
import SignIn.Types
import Questions.State
import Questions.Types
import Http


-- INIT


initialModel : Route -> Model
initialModel route =
    { route = route
    , signInModel = SignIn.State.init
    , authToken = Nothing
    , currentUser = Nothing
    , languages = []
    , questionsModel = Questions.State.init
    }


init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            Routing.parseLocation location
    in
        (initialModel currentRoute
            ! [ requestLoadFromStorage "authToken"
              , fetchLanguages
              ]
        )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NavigateTo route ->
            (model ! [ Navigation.newUrl <| Routing.reverse route ])

        UrlChange location ->
            ({ model | route = parseLocation location } ! [])

        SignInMsg subMsg ->
            signInUpdate subMsg model

        SignOut ->
            ({ model | authToken = Nothing, currentUser = Nothing } ! [])

        ReceiveCurrentUser result ->
            receiveCurrentUser result model

        ReceiveLanguages languages ->
            ({ model | languages = languages } ! [])

        QuestionsMsg subMsg ->
            questionsUpdate subMsg model

        LoadFromStorage ( key, payload ) ->
            case payload of
                Just value ->
                    case key of
                        "authToken" ->
                            (model ! [ fetchCurrentUser payload ])

                        _ ->
                            (model ! [])

                Nothing ->
                    (model ! [])


signInUpdate : SignIn.Types.Msg -> Model -> ( Model, Cmd Msg )
signInUpdate msg model =
    case msg of
        SignIn.Types.SignIn (Ok token) ->
            let
                authToken =
                    Just token
            in
                { model | authToken = authToken }
                    ! [ storeToStorage ( "authToken", token )
                      , fetchCurrentUser authToken
                      ]

        _ ->
            let
                ( updatedSignInModel, signInCmd ) =
                    SignIn.State.update msg model.signInModel
            in
                ( { model | signInModel = updatedSignInModel }, Cmd.map SignInMsg signInCmd )


receiveCurrentUser : Result Http.Error User -> Model -> ( Model, Cmd Msg )
receiveCurrentUser result model =
    case result of
        Ok user ->
            ({ model | currentUser = Just user } |> update (NavigateTo QuestionsRoute))

        Err _ ->
            ( { model | currentUser = Nothing }, Cmd.none )


questionsUpdate : Questions.Types.Msg -> Model -> ( Model, Cmd Msg )
questionsUpdate msg model =
    let
        ( updatedQuestionsModel, questionsCmd ) =
            Questions.State.update msg model.questionsModel
    in
        ( { model | questionsModel = updatedQuestionsModel }, Cmd.map QuestionsMsg questionsCmd )



-- PORTS


port storeToStorage : ( String, String ) -> Cmd msg


port requestLoadFromStorage : String -> Cmd msg


port loadFromStorage : (( String, Maybe String ) -> msg) -> Sub msg



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    loadFromStorage LoadFromStorage
