module Routing exposing (..)

import Navigation exposing (Location)
import UrlParser exposing (Parser, oneOf, parsePath, map, top, s)
import Main.Types exposing (Route(..))


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map QuestionsRoute top
        , map SignInRoute (s "signin")
        ]


parseLocation : Location -> Route
parseLocation location =
    parsePath matchers location
        |> Maybe.withDefault NotFoundRoute


reverse : Route -> String
reverse route =
    case route of
        QuestionsRoute ->
            "/"

        SignInRoute ->
            "/signin"

        NotFoundRoute ->
            "/404"
