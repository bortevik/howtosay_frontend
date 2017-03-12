module Questions.View exposing (..)

import Html exposing (Html, h1, text)
import Html.Attributes exposing (class)
import Questions.Types exposing (Model, Msg(..))


view : Model -> Html Msg
view model =
    h1 [ class "title is-1" ] [ text "Questions" ]
