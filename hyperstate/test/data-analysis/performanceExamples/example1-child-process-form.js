
'use strict';
const UUID = require('uuid/v1');
const methods = require('../../methods.js');

process.on('message',async function(){

    //INIT DATA////////////////////////////////////////////////////////////// 
    // let trackId = 'example111' ;
    // await methods.createTrack(trackId, 'track', 100, 'vendorIdentifier', 'label', 'author', 'MUSICIAN');

    // let trader1 = 'trader111';
    // await methods.createParticipant(trader1, 'tarder1', 'trader1', 0.00, 'DISTRIBUTOR', trader1);
    // let trader2 = UUID();
    // await methods.createParticipant(trader2, 'trader2', 'trader2', 0.00, 'DISTRIBUTOR', trader2);
    // let trader3 = UUID();
    // await methods.createParticipant(trader3, 'trader3', 'trader3', 0.00, 'ARTIST', trader3);
    // let trader4 = UUID();
    // await methods.createParticipant(trader4, 'trader4', 'trader4', 0.00, 'ARTIST', trader4);

    // //Example 1//////////////////////////////////////////////////////////////////
    // let agreement1Id = UUID();
    // await methods.createAgreement(agreement1Id, trader1, trader2, 0.3, 'PENDING', trackId, 'trader1', 'trader2');
    // let agreement2Id = UUID();
    // await methods.createAgreement(agreement2Id, trader1, trader3, 0.5, 'PENDING', trackId, 'trader1', 'trader3');
    // let agreement3Id = UUID();
    // await methods.createAgreement(agreement3Id, trader3, trader4, 0.9, 'PENDING', trackId, 'trader3', 'trader4');

     await methods.distribution('example111' , 'trader111', String(new Date().toISOString()));
    // await methods.distribution(trackId, trader1, String(new Date().toISOString()));

    // console.log('TOKEN TRADER 1');
    // await methods.getTokenAccount(trader1);
    // console.log('TOKEN TRADER 2');
    // await methods.getTokenAccount(trader2);
    // console.log('TOKEN TRADER 2');
    // await methods.getTokenAccount(trader3);
    // console.log('TOKEN TRADER 3');
    // await methods.getTokenAccount(trader4);   
    
    // process.send('PROCESS TERMINATED');
});

