module Main.Rest exposing (..)

import Main.Types exposing (Msg(..), AuthToken, User)
import Http
import Task
import Utils.Http exposing (get)
import Main.Decoders exposing (userDecoder, languagesDecoder)


fetchCurrentUser : AuthToken -> Cmd Msg
fetchCurrentUser token =
    get token "/current_user" userDecoder
        |> Http.toTask
        |> Task.attempt ReceiveCurrentUser


fetchLanguages : Cmd Msg
fetchLanguages =
    let
        handleResult r =
            case r of
                Ok payload ->
                    ReceiveLanguages payload

                Err error ->
                    ReceiveLanguages []
    in
        get Nothing "/languages" languagesDecoder
            |> Http.toTask
            |> Task.attempt handleResult
