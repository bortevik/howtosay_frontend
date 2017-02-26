module Utils.Decode exposing (..)

import Json.Decode exposing (..)


idAttr : Decoder String
idAttr =
    (at [ "id" ] string)


attr : String -> Decoder a -> Decoder a
attr attrName decoder =
    (at [ "attributes", attrName ] decoder)


relationshipId : String -> Decoder String
relationshipId relationship =
    (at [ "relationships", relationship, "data", "id" ] string)
