module Main exposing (..)

import Html exposing (program)
import Main.State exposing (init, update, subscriptions)
import Main.Types exposing (Model, Msg)
import Main.View exposing (view)


main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
