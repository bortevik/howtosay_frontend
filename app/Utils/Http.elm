module Utils.Http exposing (..)

import Http exposing (Header, Request, Body, Expect, expectJson, header, emptyBody)
import Json.Encode as Encode
import Json.Decode as Decode exposing (Decoder)
import Main.Types exposing (AuthToken)


post : AuthToken -> String -> Encode.Value -> Decoder a -> Request a
post authToken url json decoder =
    let
        body =
            prepareBody json

        expect =
            expectJson decoder
    in
        request authToken url "POST" body expect


get : AuthToken -> String -> Decoder a -> Request a
get authToken url decoder =
    let
        expect =
            expectJson decoder
    in
        request authToken url "GET" emptyBody expect


request : AuthToken -> String -> String -> Body -> Expect a -> Request a
request authToken url method body expect =
    Http.request
        { method = method
        , headers = headers authToken
        , url = buildUrl url
        , body = body
        , expect = expect
        , timeout = Nothing
        , withCredentials = False
        }


buildUrl : String -> String
buildUrl path =
    "http://localhost:4000/api/v1" ++ path


prepareBody : Encode.Value -> Body
prepareBody json =
    json
        |> Encode.encode 0
        |> Http.stringBody "application/vnd.api+json"


headers : AuthToken -> List Header
headers authToken =
    [ header "Accept" "application/vnd.api+json" ] ++ authHeader authToken


authHeader : AuthToken -> List Header
authHeader authToken =
    case authToken of
        Just token ->
            [ header "Authorization" ("Bearer " ++ token) ]

        Nothing ->
            []
