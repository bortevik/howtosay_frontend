module Questions.View exposing (..)

import Html exposing (Html, h1, text, div)
import Html.Attributes exposing (class)
import Questions.Types exposing (Model, Msg(..), Question)


view : Model -> Html Msg
view model =
    div [ class "questions" ]
        [ h1 [ class "title is-1" ] [ text "Questions" ]
        , questionsView model.questions
        ]


questionsView : List Question -> Html Msg
questionsView questions =
    div [ class "questions-list" ] (List.map questionView questions)


questionView : Question -> Html Msg
questionView question =
    div [ class "question-item" ]
        [ div [ class "summary" ]
            [ div [ class "question-body" ] [ text question.text ]
            ]
        ]
