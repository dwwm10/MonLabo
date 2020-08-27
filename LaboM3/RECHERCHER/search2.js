$(function(){

    setHTMLSearchBar(".SearchBar");
    getSearchRequest();
    
    /* Fonction Recupère la valeur à rechercher...
        Mission : Recupérer l'objet de la recherche
        Input   : ...
        Output  : La valeur de l'input text
    */
    function getSearchRequest(){
        
        //Je recupère la valeur saisie dans zone de recherche....
        $(".go").on({                                                      //--> Syntaxe pour evenement multiple avec methode .on({...});

            click: function(){
                var saisie = $(".recherche").val();
                return saisie;
                
                // console.log(saisie);
            },

            mouseover:function(){

                $(".go").toggleClass("btn-primary");

            }

        });
    }

    /* Fonction Rechercher dans le tableau...
        Mission : Rechercher dans le tableau les elements correspondant au critère de recherche
        Input   : Le tableau ciblé ('tab') & la valeur recherchée ('element').
        Output  : Un Tableau des resultats ('resultTab')
    */
    function searchInTab(tab, element){

        var resultTab = tab.filter() ;

        return resultTab;
    }

    /* Fonction Rechercher dans la map...
        Mission : Rechercher dans la map les elements correspondant au critère de recherche
        Input   : La map ciblé ('map') & la valeur recherchée ('element').
        Output  : Un Tableau des resultats ('resultTab')
    */
   function searchInMap(map, element){

        var resultTab = map.filter() ;

        return resultTab;

    }

    /* Fonction Suggestion de recherche...
        Mission : Proposer des elements de recherche au cours de la  saisie...
        Input   : ...
        Output  : ...
    */
    function suggestRequest(){

    }

    /* Fonction Afficher la barrre de recherche...OK
        Mission : Integrer la barre de recherche dans le fichier HTML...
        Input   : ...
        Output  : ...
    */
    function setHTMLSearchBar(selecteur){

        $(selecteur).append(`
                
            <div class="form-group">
                <div class="input-group">

                    <input type="text" class="form-control col-md-5 recherche" placeholder="Search..." id="Recherche">
                    <div class="input-group-append">
                        <button type="submit" class="input-group-text go">GO</button>
                    </div>

                </div>
            </div>
            
        `);
    }













})