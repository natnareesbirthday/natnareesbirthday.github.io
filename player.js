

  $(window).on('shown.bs.modal', function(e) { 
    if( $('#playlistModal').is( e.target ) ) {
        $('#playlistModal').modal('show');
        var songNames = ["Talk by Disclosure and Khalid", "Shea Butter Baby (feat. J. Cole) by Ari Lennox", "Beige by Terrace Martin",
                        "Come Through and Chill (feat. J. Cole) by Miguel", "Bonafide (feat. John Paul) by Kuri Ken", "Teenage Fantasy by Jorja Smith",
                        "Hungry Hippo by Tierra Whack", "Best Part (feat. H.E.R.) by Daniel Caesar", "Phone Numbers by Dominic Fike",
                        "Coffee Bean by Travis Scott", "White Dress by Kanye West", "20 min by Lil Uzi Vert",
                        "My Favorite Part (feat. Ariana Grande) by Mac Miller", "Chanel by Frank Ocean", "The Bird by Anderson .Paak",
                        "Lucid Dreams by Juice WRLD", "Ivy by Frank Ocean", "2009 by Mac Miller",
                        "Honesty by Pink Sweat$", "Summertime Magic by Childish Gambino", "The Weekend by SZA"]
        var length = 22;
        var elm = 1; var Player = document.getElementById('fullPlaylist');
        var trackName = document.getElementById("trackName");
        Player.onended = function(){
            if(++(elm) < length){       
                Player.src = "Songs/" + (elm) + ".mp3"; Player.play();
                trackName.innerHTML = songNames[elm-1];
            } 
        }
    }
    else {
        var Player = document.getElementById('fullPlaylist');
        Player.pause();
    }
    
});