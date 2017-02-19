module Main exposing (..)

import Main.State exposing (init, update, subscriptions)
import Main.Types exposing (Model, Msg(..))
import Main.View exposing (view)
import Navigation exposing (Location)


main : Program Never Model Msg
main =
    Navigation.program UrlChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
