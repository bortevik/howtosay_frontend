module SignIn.State exposing (..)

import SignIn.Types exposing (Model, Msg(..))
import SignIn.Rest as Rest


init : Model
init =
    { email = ""
    , password = ""
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        EmailInput email ->
            ( { model | email = email }, Cmd.none )

        PasswordInput password ->
            ( { model | password = password }, Cmd.none )

        SignInSubmit ->
            ( model, Rest.signIn model )

        SignIn result ->
            ( model, Cmd.none )
