<template>
  <div class="hello">
        <kendo-tabstrip style="width:950px; margin: 25px auto;">
            <ul>
                <li class="k-state-active">Liste</li>
                <li>Ajouter</li>

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
                    <div>
                        <div>
                            <form class="k-form" @submit="handleSubmit">
                                <h5>Créer un nouvel index</h5>
                                <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Idxagr</label>
                                        <div class="col-sm-10">
                                            <input
                                                v-model="Idxagr"
                                                class="k-textbox"
                                                name="Idxagr"
                                                style="width: 100%;"
                                            >
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Libellé</label>
                                            <div class="col-sm-10">
                                                <input
                                                    v-model="Libidx"
                                                    class="k-textbox"
                                                    name="Libidx"
                                                    style="width: 100%;"
                                                >
                                            </div>
                                </div>
                                <input type="submit" class="k-button k-primary" style ="margin-top:25px;" value="Créer" />
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

                <div v-if="Fail"
                        class="alert alert-success"  
                        :style="{ position: 'absolute' }"
                    >
                        Ajout Impossible.
                </div>
            </div> 

        </div>

    </kendo-tabstrip>
  </div>
</template>

<script>
import { orderBy } from '@progress/kendo-data-query'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
export default {
  name: 'AdvIndex',
  data: function (){
    return {
            success: false,
            fail: false,
            filter: {
                        logic: "and",
                        filters: [ ]
            },
            skip: 0,
            take: 10,
            sort: [
                { field: 'Idxagr', dir: 'asc' }
            ],
            posts:[],
            baseUrl: 'http://195.5.84.3:8820/Sports/rest/SportsService/AdvIndex',
            url : '',
            urlCount:'',
            filterInput:'',
            sortInput:'',
            count:0,
            Idxagr:'',
            Libidx:'',
            dataResults:[],
            columns: [
                    { field: "Idxagr",  width: "200px"},
                    { field: "Libidx",  width: "300px"},               
                ],
         
    }
},   
    mounted: function(){
        this.url = encodeURI(this.baseUrl +'?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
        this.urlCount = encodeURI(this.baseUrl+'/count?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
        axios.get(this.url).then(reponse => this.dataResults = reponse.data.dsAdvIndex.ttindex)
        axios.put(this.urlCount).then(reponse => this.count = reponse.data.response.numRecs)   

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
            axios.get(this.url).then(reponse => this.dataResults = reponse.data.dsAdvIndex.ttindex)
        },

        sortChangeHandler: function(e) {
            this.sort = e.sort;
            this.sortInput = '';
            for (let i=0; i< this.sort.length; i++){
                this.sortInput = this.sortInput + this.sort.[i]['field'];
                if(this.sort[i]['dir'] != 'asc'){
                    this.sortInput = this.sortInput + " "+this.sort[i]['dir']
                }
                this.sortInput = this.sortInput + ' , ';
            }
            this.sortInput = this.sortInput.substring(0, this.sortInput.length -3);
            this.url = encodeURI(this.baseUrl +'?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
            this.urlCount = encodeURI(this.baseUrl+'/count?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
            axios.get(this.url).then(reponse => this.dataResults = reponse.data.dsAdvIndex.ttindex)
            axios.put(this.urlCount).then(reponse => this.count = reponse.data.response.numRecs);
        },

        filterChange: function(ev) {
            this.filterInput = '';
            this.filter = ev.filter;
            if (this.filter != null){
                for (let i=0; i< this.filter.filters.length; i++){
                    this.filterInput = this.filterInput + this.filter.filters[i]['field'] + " begins '"+this.filter.filters[i]['value'] +"'";
                    this.filterInput = this.filterInput + ' and ';
                }
                this.filterInput = this.filterInput.substring(0, this.filterInput.length - 5);
            }
            this.url = encodeURI(this.baseUrl +'?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
            this.urlCount = encodeURI(this.baseUrl+'/count?filter={"top":'+this.take+',"skip":'+this.skip+',"orderBy":"'+this.sortInput+'","ablFilter":"'+this.filterInput+'"}');
            axios.get(this.url).then(reponse => this.dataResults = reponse.data.dsAdvIndex.ttindex)
            axios.put(this.urlCount).then(reponse => this.count = reponse.data.response.numRecs);   
        },
        handleSubmit (event) {
            event.preventDefault();                        
            axios
            .post('http://195.5.84.3:8820/Sports/rest/SportsService/AdvIndex', 
                    {
                        "dsAdvIndex": {
                            "prods:hasChanges":true,
                            "ttindex":[
                                {
                                    "Idxagr": this.Idxagr,
                                    "Libidx": this.Libidx,
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
                this.fail = true;        
            })                   
        },
  }
}
</script>