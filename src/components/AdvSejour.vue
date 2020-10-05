<template>
  <div class="hello">


          <kendo-tabstrip style="width:950px; margin: 25px auto;" >
        <ul>
            <li class="k-state-active">
                Liste
            </li>
            <li>
                Ajouter
            </li>

        </ul>

        <div>
            <Grid
                :data-items = "result"
                :pageable="true"
                :skip= "skip"
                :take="take"
                :total="total"
                :sortable="sortable"
                :sort= "sort"
                :columns = "columns"
                :filterable="true"
                :filter="filter"
                @filterchange="filterChange"
                @pagechange="pageChangeHandler"
                @sortchange="sortChangeHandler"
                >
            </Grid>
        </div>

        <div style="overflow:hidden">
            <div class="row example-wrapper" >
                <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
                    <div >
                        <div >
                            <form class="k-form" @submit="handleSubmit">
                                <h5>Créer un nouveau Séjour</h5>

                                <div class="form-group row">
                                        <label class="col-sm-4 col-form-label">Numéro de patient</label>
                                        <div class="col-sm-7">
                                        <input
                                            class="k-textbox"
                                            name="NObottin"
                                            v-model="NObottin"
                                            style="width: 100%;"
                                        >
                                        </div>
                                </div>
                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Nom du patient</label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Nompat"
                                                    class="k-textbox"
                                                    name="Nompat"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Numéro de séjour</label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="nosej"
                                                    class="k-textbox"
                                                    name="nosej"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                
                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Date de naissance</label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Datnai"
                                                    class="k-textbox"
                                                    name="Datnai"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                
                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Sexe</label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Sexpat"
                                                    class="k-textbox"
                                                    name="Sexpat"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Code Postal</label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Codpos"
                                                    class="k-textbox"
                                                    name="Codpos"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Orgoa1 </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Orgoa1"
                                                    class="k-textbox"
                                                    name="Orgoa1"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Statut </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Statut"
                                                    class="k-textbox"
                                                    name="Statut"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Date de début </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Debsej"
                                                    class="k-textbox"
                                                    name="Debsej"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Date de fin </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="finsej"
                                                    class="k-textbox"
                                                    name="finsej"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Codrea </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Codrea"
                                                    class="k-textbox"
                                                    name="Codrea"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">adresse </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Adrsej"
                                                    class="k-textbox"
                                                    name="Adrsej"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Modadm </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Modadm"
                                                    class="k-textbox"
                                                    name="Modadm"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Adrpar </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Adrpar"
                                                    class="k-textbox"
                                                    name="Adrpar"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Typsor </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Typsor"
                                                    class="k-textbox"
                                                    name="Typsor"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Coddes </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Coddes"
                                                    class="k-textbox"
                                                    name="Coddes"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Typpat </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Typpat"
                                                    class="k-textbox"
                                                    name="Typpat"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Typfor </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Typfor"
                                                    class="k-textbox"
                                                    name="Typfor"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Typadm </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Typadm"
                                                    class="k-textbox"
                                                    name="Typadm"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>


                                 <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">codpay </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="codpay"
                                                    class="k-textbox"
                                                    name="codpay"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">debheu </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="debheu"
                                                    class="k-textbox"
                                                    name="debheu"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">finheu </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="finheu"
                                                    class="k-textbox"
                                                    name="finheu"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">debmin </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="debmin"
                                                    class="k-textbox"
                                                    name="debmin"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">finmin </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="finmin"
                                                    class="k-textbox"
                                                    name="finmin"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">sejclot </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="sejclot"
                                                    class="k-textbox"
                                                    name="sejclot"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Prestation </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="prest"
                                                    class="k-textbox"
                                                    name="prest"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Nation </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Nation"
                                                    class="k-textbox"
                                                    name="Nation"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">m-nosej </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="mnosej"
                                                    class="k-textbox"
                                                    name="m-nosej"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                 <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">site </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="site"
                                                    class="k-textbox"
                                                    name="site"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                 <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">G </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="G"
                                                    class="k-textbox"
                                                    name="G"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">lieadm </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="lieadm"
                                                    class="k-textbox"
                                                    name="lieadm"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">nnrjrea </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="nbjrea"
                                                    class="k-textbox"
                                                    name="nbrjea"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Assoc </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Assoc"
                                                    class="k-textbox"
                                                    name="Assoc"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>
                                
                                 <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">TypAssoc </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="TypAssoc"
                                                    class="k-textbox"
                                                    name="TypAssoc"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">Assur </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="Assur"
                                                    class="k-textbox"
                                                    name="Assur"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>

                                <div class="form-group row">

                                    <label class="col-sm-4 col-form-label">TypPatVip </label>
                                            <div class="col-sm-7">
                                                <input
                                                    v-model="TypPatVip"
                                                    class="k-textbox"
                                                    name="TypPatVip"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>





                                <input type="submit" class="k-button k-primary" style ="margin-top:25px;"  value="Créer" />
                            </form>
                        </div>
                    </div>
                </div>
               <div v-if="success"
                        class="alert alert-success"
                        
                        :style="{ position: 'absolute' }"
                    >
                        Ajout réussi !
                </div>
            </div> 
        </div>
    </kendo-tabstrip>
  </div>
</template>

<script>
//import Vue from 'vue'
import { orderBy } from '@progress/kendo-data-query'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
export default {
  name: 'AdvSejour',

  data: function (){
    return {
success: false,
     filter: {
                logic: "and",
                filters: [         
                ]
            },

            skip: 0,
            take: 10,
            sort: [
                { field: 'nosej', dir: 'asc' }
            ],
        posts:[],
        baseUrl: 'http://195.5.84.3:8820/Sports/rest/SportsService/AdvSejour',
        url : '',
        urlCount:'',
        filterInput:'',
        sortInput:'',
        count:0,
        dataResults:[],
                nosej: "",
                Nompat: "",
                NObottin: "",
                Datnai: "",
                Sexpat: "",
                Codpos: "",
                Orgoa1: "",
                Statut: "",
                Debsej: "",
                finsej: "",
                Codrea: "",
                Adrsej: "",
                Modadm: "",
                Adrpar: "",
                Typsor: "",
                Coddes: "",
                Typpat: "",
                Typadm: "",
                Typfor: "",
                codpay: "",
                debheu: "",
                finheu: "",
                debmin: "",
                finmin: "",
                sejclot: "",
                prest: "",
                NATION: "",
                mnosej: "",
                site: "",
                lieadm: "",
                nbjrea: "",
                Assoc: "",
                TypAssoc: "",
                Assur: "",
                TypPatVip: "",
        columns: [
                // { field: "Idxagr",  width: "200px"},
                // { field: "Libidx",  width: "300px"},
                
                { field: "nosej",  width: "300px"},
                { field: "Nompat",  width: "300px"},
                { field: "Debsej",  width: "300px"},
                { field: "finsej",  width: "300px"},
            ],
         
    }

},   
    mounted: function(){
        this.url = encodeURI(this.baseUrl +'?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
        this.urlCount = encodeURI(this.baseUrl+'/count?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
        //alert(encodeURI(this.baseUrl+'?filter={"top":'+1+',"skip":'+2000+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}'));
        
        
        axios.get(encodeURI(this.baseUrl+'?filter={"top":'+1+',"skip":'+2000+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}')).then(function (reponse){
        //alert(this.count);
        let length = reponse.data.dsAdvSejour.ttSejour.length;
         if(length == 0){
                axios.put(this.urlCount).then(reponse => this.count = reponse.data.response.numRecs)   
            } else {
                
                this.count = 2000 
                //alert('test2');               
            }
        }
        );

        //axios.put(this.urlCount).then(reponse => this.count = reponse.data.response.numRecs)    
        //alert(encodeURI('http://195.5.84.3:8820/Sports/rest/SportsService/AdvIndex{"Idxagr":"ZZ", "Libidx": "blablabla"}'));
        //alert(this.urlCount);
        axios.get(this.url).then(reponse => this.dataResults = reponse.data.dsAdvSejour.ttSejour)
        //console.log(this.dataResults)
  },
      computed: {
        result: {
            get: function() {
                    var test = orderBy(this.dataResults, this.sort);              
                return test;
           }
        },
        total () {
            return this.count; // retrouver la valeur total
        },
        sortable() {
            return {
                
                mode: 'multiple'
            };
        }
    },
      
  methods: {
pageChangeHandler: function(event) {
            this.skip = event.page.skip;
            this.take = event.page.take;
            this.url = encodeURI(this.baseUrl +'?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
            axios.get(this.url).then(reponse => this.dataResults = reponse.data.dsAdvSejour.ttSejour)
            //alert(this.url);
        },
sortChangeHandler: function(e) {
            this.sort = e.sort;
            //console.log(this.sort);

            this.sortInput = '';
            for (let i=0; i< this.sort.length; i++){
                //console.log(this.filter.filters[i]['field'] + ' ' + this.filter.filters[i]['operator'] + ' '+this.filter.filters[i]['value']);
                this.sortInput = this.sortInput + this.sort.[i]['field'];
                if(this.sort[i]['dir'] != 'asc'){
                 this.sortInput = this.sortInput + " "+this.sort[i]['dir']
                }
                this.sortInput = this.sortInput + ' , ';
            }
            

            this.sortInput = this.sortInput.substring(0, this.sortInput.length -3);
            //console.log(this.sortInput);
            this.url = encodeURI(this.baseUrl +'?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
            this.urlCount = encodeURI(this.baseUrl+'/count?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
            //alert(this.url)
        axios.get(this.url).then(reponse => this.dataResults = reponse.data.dsAdvSejour.ttSejour)
            axios.put(this.urlCount).then(reponse => this.count = reponse.data.response.numRecs);
        },
filterChange: function(ev) {
    //alert('filter');
    this.filterInput = '';
    this.filter = ev.filter;
    if (this.filter != null){
            for (let i=0; i< this.filter.filters.length; i++){
                //console.log(this.filter.filters[i]['field'] + ' ' + this.filter.filters[i]['operator'] + ' '+this.filter.filters[i]['value']);
                this.filterInput = this.filterInput + this.filter.filters[i]['field'] + " begins '"+this.filter.filters[i]['value'] +"'";
                this.filterInput = this.filterInput + ' and ';
            }

            this.filterInput = this.filterInput.substring(0, this.filterInput.length - 5);
            }
            this.url = encodeURI(this.baseUrl +'?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
            this.urlCount = encodeURI(this.baseUrl+'/count?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
    //alert(this.url)
        axios.get(this.url).then(reponse => this.dataResults = reponse.data.dsAdvSejour.ttSejour)
    axios.put(this.urlCount).then(reponse => this.count = reponse.data.response.numRecs);
        },
handleSubmit (event) {
            event.preventDefault();
            
            
    axios
      .post('http://195.5.84.3:8820/Sports/rest/SportsService/AdvIndex', 
        //loginModel: loginModel
     {
     "dsAdvSejour": {
        "prods:hasChanges":true,
        "ttSejour":[
            {
                "nosej": this.nosej,
                "Nompat": this.Nompat,
                "NObottin": this.NObottin,
                "Datnai": this.Datnai,
                "Sexpat": this.Sexpat,
                "Codpos": this.Codpos,
                "Orgoa1": this.Orgoa1,
                "Statut": this.Statut,
                "Debsej": this.Debsej,
                "finsej": this.finsej,
                "Codrea": this.Codrea,
                "Adrsej": this.Adrsej,
                "Modadm": this.Modadm,
                "Adrpar": this.Adrpar,
                "Typsor": this.Typsor,
                "Coddes": this.Coddes,
                "Typpat": this.Typpat,
                "Typadm": this.Typadm,
                "Typfor": this.Typfor,
                "codpay": this.codpay,
                "debheu": this.debheu,
                "finheu": this.finheu,
                "debmin": this.debmin,
                "finmin": this.finmin,
                "sejclot": this.sejclot,
                "prest": this.prest,
                "NATION": this.NATION,
                "m-nosej": this.mnosej,
                "site": this.site,
                "lieadm": this.lieadm,
                "nbjrea": this.nbjrea,
                "Assoc": this.Assoc,
                "TypAssoc": this.TypAssoc,
                "Assur": this.assur,
                "TypPatVip": this.TypPatVip
              
            }    
        ],
        "prods:before":{}
    }
}
      )
      .then(() => {
            this.success = true;
            setTimeout(() => { this.success = false; }, 3000);
      })
      .catch((error) => {
        console.error(error)
      })    
            this.success = true;
            setTimeout(() => { this.success = false; }, 3000);
        },
  }
}
</script>