<template>
  <v-container>
    <h1>Add <em class="underline">{{model.common_name ? model.common_name : 'someone'}}</em> to the Tech List</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="model.full_name" label="Full Name" required/>
          </v-col>
          <v-col>
            <v-text-field v-model="model.common_name" label="Common Name" required/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select v-model="model.pronouns" label="pronouns" :items="this.getPronounsList()"/>
          </v-col>
          <v-col>
            <v-text-field v-model="model.pronouns.subject" label="he/she/they" :value="model.pronouns.subject"
                          required/>
          </v-col>
          <v-col>
            <v-text-field v-model="model.pronouns.object" label="him/her/them" required/>
          </v-col>
          <v-col>
            <v-text-field v-model="model.pronouns.possessive" label="his/hers/their" required/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea v-model="model.description"
                        :label="`What makes ${model.pronouns.object || 'them'} notable?`"
                        required></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="model.birth_year" label="Birth Year"/>
          </v-col>
          <v-col>
            <v-text-field v-model="model.birth_year" label="Death Year"/>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-expansion-panels multiple="true" focusable="true">
          <!--Accomplishments-->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2>Accomplishments</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <Accomplishment v-for="item in model.accomplishment" v-bind:accomplishment="item" v-bind:list="model.accomplishment"/>
              </v-row>
              <v-row>
                <v-btn color="primary" small fab @click.stop="addAccomplishment()">
                  <v-icon dark>mdi-plus-circle</v-icon>
                </v-btn>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Education-->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2>Education</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <Education v-for="item in model.education" v-bind:education="item" v-bind:list="model.education"/>
              </v-row>
              <v-row>
                <v-btn color="primary" small fab @click.stop="addEducation()">
                  <v-icon dark>mdi-plus-circle</v-icon>
                </v-btn>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Employment-->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2>Employment</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <Employment v-for="item in model.employment" v-bind:data="item" v-bind:list="model.employment"/>
              </v-row>
              <v-row>
                <v-btn color="primary" small fab @click.stop="addEmployment()">
                  <v-icon dark>mdi-plus-circle</v-icon>
                </v-btn>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Association-->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2>Associations</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <Association v-for="item in model.other_assocations" v-bind:data="item" v-bind:list="model.other_assocations"/>
              </v-row>
              <v-row>
                <v-btn color="primary" small fab @click.stop="addAssociation()">
                  <v-icon dark>mdi-plus-circle</v-icon>
                </v-btn>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
  import Accomplishment from "./Accomplishment";
  import Education from "./Education";
  import Employment from "./Employment";
  import Association from "./Association";
  import DataModel from '../services/DataModel';

  export default {
    name: 'MainForm',
    components: {
      Accomplishment,
      Education,
      Employment,
      Association
    },
    data: () => ({
      model: DataModel.data,
      valid: false
    }),
    methods: {
      getPronounsList: () => {
        return [
          {text: 'she/her', value: DataModel.factoryPronoun('she', 'her', 'hers')},
          {text: 'he/him', value: DataModel.factoryPronoun('he', 'him', 'his')},
          {text: 'they/them', value: DataModel.factoryPronoun('they', 'them', 'their')},
          {text: 'other', value: DataModel.factoryPronoun('', '', '')},
        ]
      },
      addAccomplishment: function () {
        this.model.accomplishment.push(DataModel.factoryAccomplishment())
      },
      addEducation: function () {
        this.model.education.push(DataModel.factoryEducation())
      },
      addEmployment: function () {
        this.model.employment.push(DataModel.factoryEmployment())
      },
      addAssociation: function () {
        this.model.other_assocations.push(DataModel.factoryAssociation())
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  em.underline {
    text-decoration: underline;
    font-style: inherit;
  }
</style>
