module SignIn.State exposing (..)

import SignIn.Types exposing (Model, Email(..), Password(..), Msg(..))


init : Model
init =
    { email = Email ""
    , password = Password ""
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )
