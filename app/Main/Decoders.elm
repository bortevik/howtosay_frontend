module Main.Decoders exposing (..)

import Json.Decode exposing (..)
import Main.Types exposing (User, Language)
import Utils.Decode exposing (attr, idAttr, relationshipId)


userDecoder : Decoder User
userDecoder =
    field "data" user


user : Decoder User
user =
    map4 User
        idAttr
        (attr "name" string)
        (attr "language-to-ids" (list int))
        (relationshipId "language")


languagesDecoder : Decoder (List Language)
languagesDecoder =
    field "data" (list language)


language : Decoder Language
language =
    map3 Language
        idAttr
        (attr "code" string)
        (attr "name" string)
