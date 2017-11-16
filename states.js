'use strict';


exports.register = function register(skill) {
//  skill.onIntent('LaunchIntent', ()  => ({ reply: 'Intent.Launch', to: 'Question' }));
  skill.onIntent('LaunchIntent', (request) => {
      console.log('here');
      return { reply: 'Intent.Launch' };
  });
                 
//  skill.onState('Question', (request) => {
//      var questnum = 0;
//        if (questnum <= 4)  {
//            questnum = questnum + 1;
//            ({reply: 'Intent.Question', to: 'Question'});
//
//      } else {
//            ({reply: 'Intent.Question', to: 'Thanks'});
//      };
//      });
//    
//  skill.onState('Thanks', (request) => ({ reply: 'Intent.Thanks', to: 'die'}));
//
//  skill.onIntent('AMAZON.HelpIntent', () => ({ reply: 'Intent.Help', to: 'die' }));
};
