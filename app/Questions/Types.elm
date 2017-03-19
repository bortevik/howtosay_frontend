module Questions.Types exposing (..)


type alias Model =
    { questions : List Question
    }


type alias Question =
    { id : String
    , text : String
    }


type Msg
    = OnPageLoad
    | ReceiveQuestions (List Question)



{-
   text:         attr('string'),
   insertedAt:   attr('date'),
   updatedAt:    attr('date'),
   votes:        attr('number'),
   answersCount: attr('number'),

   answers:      hasMany('answer'),
   languageFrom: belongsTo('language'),
   languageTo:   belongsTo('language'),
   user:         belongsTo('user')
-}
