module SignIn.Rest exposing (..)

import Http
import Task
import SignIn.Types exposing (Model, Msg(..))
import SignIn.Encoders exposing (signInEncoder)
import SignIn.Decoders exposing (signInDecoder)
import Utils.Http exposing (post)


signIn : Model -> Cmd Msg
signIn model =
    signInRequest model
        |> Http.toTask
        |> Task.attempt SignIn


signInRequest : Model -> Http.Request String
signInRequest model =
    let
        encodedJson =
            signInEncoder model

        authToken =
            Nothing
    in
        post authToken "/signin" encodedJson signInDecoder
