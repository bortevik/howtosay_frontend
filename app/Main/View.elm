module Main.View exposing (..)

import Html exposing (Html, div, text)
import Main.Types exposing (Model, Msg(..))


view : Model -> Html Msg
view model =
    div []
        [ text model ]
