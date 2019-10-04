<template>
  <v-container>
    <h1>Add <em class="underline">{{common_name ? common_name : 'someone'}}</em> to the Tech List</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="full_name" label="Full Name" required/>
          </v-col>
          <v-col>
            <v-text-field v-model="common_name" label="Common Name" required/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select v-model="pronouns" label="pronouns" :items="this.getPronounsList()"/>
          </v-col>
          <v-col>
            <v-text-field v-model="pronouns.subject" label="he/she/they" :value="pronouns.subject"
                          required/>
          </v-col>
          <v-col>
            <v-text-field v-model="pronouns.object" label="him/her/them" required/>
          </v-col>
          <v-col>
            <v-text-field v-model="pronouns.possessive" label="his/hers/their" required/>
          </v-col>
        </v-row>
        <v-row>
          <v-textarea v-model="description"
                      :label="`What makes ${pronouns.object || 'them'} notable?`"
                      required></v-textarea>
        </v-row>
        <v-row>
          <v-text-field v-model="birth_year" label="Birth Year"/>
          <v-text-field v-model="birth_year" label="Death Year"/>
        </v-row>
      </v-container>
      <v-container>
        <h2>Accomplishments</h2>
        <v-row>
          <Accomplishment v-for="item in accomplishment" v-bind="item" v-on:data="mergeEventData(item, $event)"/>
        </v-row>
        <v-row>
          <v-btn color="primary" fab @click.stop="accomplishment.push(factoryAccomplishment())">
            <v-icon>mdi-pencil-outline</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
  import Accomplishment from "./Accomplishment";

  function factoryPronoun(s, o, p) {
    return {subject: s, object: o, possessive: p}
  }

  export default {
    name: 'MainForm',
    components: {
      Accomplishment
    },
    data: () => ({
      valid: false,
      full_name: '',
      common_name: '',
      pronouns: factoryPronoun('she', 'her', 'hers'),
      birth_year: null,
      death_year: null,
      description: '',
      education: [],
      employment: [],
      accomplishment: [],
      other_assocations: [],
      home: []
    }),
    methods: {
      factoryAccomplishment: () => {
        return {
          type: '',
          description: '',
          short_description: '',
          year: null
        }
      },
      factoryAssociation: () => {
        return {
          type: '',
          name: '',
          description: '',
          location: this.factoryLocation(),
          start_year: 1901,
          end_year: 1901
        }
      },
      factoryHome: () => {
        return {
          begin_year: 1901,
          end_year: 1901,
          location: this.factoryLocation()
        }
      },
      factoryEmployment: () => {
        return {
          company: '',
          location: this.factoryLocation(),
          job: '',
          start_year: 1901,
          end_year: 1901
        }
      },
      factoryEducation: () => {
        return {
          institution: '',
          location: this.factoryLocation(),
          field_of_study: ''
        }
      },
      factoryLocation: () => {
        return {
          country_full_name: '',
          country_common_name: '',
          country_abbreviation: '',
          region: '',
          region_description: '',
          region_abbreviation: '',
          metro_area: undefined
        }
      },
      getPronounsList: () => {
        return [
          {text: 'she/her', value: factoryPronoun('she', 'her', 'hers')},
          {text: 'he/him', value: factoryPronoun('he', 'him', 'his')},
          {text: 'they/them', value: factoryPronoun('they', 'them', 'their')},
          {text: 'other', value: factoryPronoun('', '', '')},
        ]
      },
      mergeEventData: (data, event) => {
        return {data, ...event};
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
