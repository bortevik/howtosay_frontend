module Questions.State exposing (..)

import Questions.Types exposing (Model, Msg(..))
import Questions.Rest exposing (fetchQuestions)


init : Model
init =
    { questions = [] }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnPageLoad ->
            (model ! [ fetchQuestions ])

        ReceiveQuestions questions ->
            ( { model | questions = questions }, Cmd.none )
