module SignIn.Rest exposing (..)

import Http
import Json.Encode as Encode
import Task
import SignIn.Types exposing (Model, Msg(..))
import SignIn.Encoders exposing (signInEncoder)
import SignIn.Decoders exposing (signInDecoder)


signIn : Model -> Cmd Msg
signIn model =
    signInRequest model
        |> Http.toTask
        |> Task.attempt SignIn


signInRequest : Model -> Http.Request String
signInRequest model =
    let
        body =
            signInEncoder model
                |> Encode.encode 0
                |> Http.stringBody "application/vnd.api+json"
    in
        Http.request
            { method = "POST"
            , headers = [ Http.header "Accept" "application/vnd.api+json" ]
            , url = "http://localhost:4000/api/v1/signin"
            , body = body
            , expect = Http.expectJson signInDecoder
            , timeout = Nothing
            , withCredentials = False
            }
