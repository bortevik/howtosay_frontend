module Questions.Decoders exposing (..)

import Json.Decode exposing (..)
import Questions.Types exposing (Question)
import Utils.Decode exposing (attr, idAttr)


questionsDecoder : Decoder (List Question)
questionsDecoder =
    field "data" (list question)


question : Decoder Question
question =
    map2 Question
        idAttr
        (attr "text" string)
