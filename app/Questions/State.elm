module Questions.State exposing (..)

import Questions.Types exposing (Model, Msg(..))


init : Model
init =
    { questions = [] }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ReceiveQuestions questions ->
            ( { model | questions = questions }, Cmd.none )
