module SignIn.Decoders exposing (..)

import Json.Decode exposing (..)


signInDecoder : Decoder String
signInDecoder =
    field "token" string
