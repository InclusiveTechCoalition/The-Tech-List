class DataModel {
  constructor() {
    this.data = {
      valid: false,
      full_name: '',
      common_name: '',
      pronouns: this.factoryPronoun('she', 'her', 'hers'),
      birth_year: null,
      death_year: null,
      description: '',
      education: [],
      employment: [],
      accomplishment: [],
      other_assocations: [],
      home: []
    }
  }

  factoryPronoun(subject, object, possessive) {
    return {subject, object, possessive}
  }

  factoryAccomplishment() {
    return {
      type: '',
      description: '',
      short_description: '',
      year: null
    }
  }

  factoryAssociation() {
    return {
      type: '',
      name: '',
      description: '',
      location: this.factoryLocation(),
      start_year: 1901,
      end_year: 1901
    }
  }

  factoryHome() {
    return {
      begin_year: 1901,
      end_year: 1901,
      location: this.factoryLocation()
    }
  }

  factoryEmployment() {
    return {
      company: '',
      location: this.factoryLocation(),
      job: '',
      start_year: undefined,
      end_year: undefined
    }
  }

  factoryEducation() {
    return {
      institution: '',
      location: this.factoryLocation(),
      field_of_study: '',
      start_year: undefined,
      end_year: undefined
    }
  }

  factoryLocation() {
    return {
      country_full_name: '',
      country_common_name: '',
      country_abbreviation: '',
      region: '',
      region_description: '',
      region_abbreviation: '',
      metro_area: undefined
    }
  }

  serialize() {
    return JSON.stringify(this.data);
  }
}

const singleton = new DataModel();

export default singleton;
