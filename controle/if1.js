function onlyGoodNotice(note)
{
    if (note >= 7) {
        console.log('Aprovado com' + note);        
    }
}

onlyGoodNotice(8.1); // Aprovado com 8.1
onlyGoodNotice(6.1);

function ifForTrueITalk(value)
{
    if (value) {
        console.log('É verdade...' + value);        
    }
}

ifForTrueITalk();
ifForTrueITalk(null);
ifForTrueITalk(undefined);
ifForTrueITalk(NaN);
ifForTrueITalk('');
ifForTrueITalk(0);
ifForTrueITalk(-1);
ifForTrueITalk(' ');
ifForTrueITalk('?');
ifForTrueITalk([]);
ifForTrueITalk([1,2]);
ifForTrueITalk({});

/*

É verdade...-1
É verdade... 
É verdade...?
É verdade...
É verdade...1,2
É verdade...[object Object]

*/
