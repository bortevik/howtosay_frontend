module Main.State exposing (..)

import Main.Types exposing (Model, Msg(..))


-- INIT


init : ( Model, Cmd Msg )
init =
    ( "Hello", Cmd.none )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
