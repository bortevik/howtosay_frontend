module Questions.Rest exposing (..)

import Questions.Types exposing (Msg(..), Question)
import Http
import Task
import Utils.Http exposing (get)
import Questions.Decoders exposing (questionsDecoder)


fetchQuestions : Cmd Msg
fetchQuestions =
    let
        handleResult r =
            case r of
                Ok payload ->
                    ReceiveQuestions payload

                Err error ->
                    ReceiveQuestions []
    in
        get Nothing "/questions" questionsDecoder
            |> Http.toTask
            |> Task.attempt handleResult
