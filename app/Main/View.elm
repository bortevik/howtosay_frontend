module Main.View exposing (..)

import Html exposing (Html, div, text, nav, a, span, h1, section)
import Html.Attributes exposing (class, href)
import Main.Types exposing (Model, Msg(..), Route(..))
import SignIn.View


view : Model -> Html Msg
view model =
    div []
        [ navMenu model
        , section [ class "section" ]
            [ div [ class "container" ] [ pageView model ] ]
        ]


navMenu : Model -> Html Msg
navMenu model =
    nav [ class "nav has-shadow" ]
        [ div [ class "container" ]
            [ div [ class "nav-left" ]
                [ a [ class "nav-item", href "/" ]
                    [ h1 [ class "title is-4" ] [ text "Howtosay" ]
                    ]
                ]
            , userMenu model
            ]
        ]


pageView : Model -> Html Msg
pageView model =
    case model.route of
        QuestionsRoute ->
            h1 [ class "title is-1" ] [ text "Questions" ]

        NotFoundRoute ->
            h1 [ class "title is-1" ] [ text "There is no such page" ]

        SignInRoute ->
            Html.map Main.Types.SignInMsg (SignIn.View.view model.signInModel)


userMenu : Model -> Html Msg
userMenu { authToken } =
    let
        links =
            case authToken of
                Just token ->
                    [ a [ class "nav-item signout" ] [ text "Sign Out" ]
                    ]

                Nothing ->
                    [ a [ class "nav-item signin", href "/signin" ] [ text "Sign In" ]
                    , a [ class "nav-item signup" ] [ text "Sign Up" ]
                    ]
    in
        div [ class "nav-right" ] links
