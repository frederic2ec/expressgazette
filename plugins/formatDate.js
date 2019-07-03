import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(new Date(value)).format('MM/DD/YYYY hh:mm')
  }
})
