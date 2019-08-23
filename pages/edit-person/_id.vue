<template>
  <form style="margin: 30px;" @submit.prevent="updateStaff">
    <div class="form-group">
      <label for="txt_name">Name</label>
      <input
        :class="{ 'is-invalid': submitted && errors.has('name') }"
        type="text"
        name="name"
        class="form-control"
        id="txt_name"
        v-model="staff.name"
        v-validate="'required'"
      />
      <div
        v-if="submitted && errors.has('name')"
        class="invalid-feedback"
      >{{ errors.first('name') }}</div>
    </div>
    <div class="form-group">
      <label for="cbo_position">Position</label>
      <select class="form-control" id="cbo_position" v-model="staff.position">
        <option value="Accountant" selected>Accountant</option>
        <option value="Developer">Developer</option>
        <option value="Tester">Tester</option>
      </select>
    </div>
    <div class="form-group">
      <label for="cbo_onfice">Office</label>
      <select class="form-control" id="cbo_onfice" v-model="staff.office">
        <option value="Edinburgh" selected>Edinburgh</option>
        <option value="Tokyo">Tokyo</option>
        <option value="HoChiMinh">Ho Chi Minh</option>
      </select>
    </div>
    <div class="form-group">
      <label for="txt_age">Age</label>
      <input
        :class="{ 'is-invalid': submitted && errors.has('age') }"
        type="number"
        name="age"
        class="form-control"
        id="txt_age"
        v-model="staff.age"
        v-validate="'required'"
      />
      <div v-if="submitted && errors.has('age')" class="invalid-feedback">{{ errors.first('age') }}</div>
    </div>
    <div class="form-group">
      <label for="startDate">Start Date</label>
      <input
        :class="{ 'is-invalid': submitted && errors.has('startDate') }"
        type="date"
        data-date
        name="startDate"
        class="form-control"
        id="txt_start_date"
        data-date-format="YYYY/MM/DD"
        v-model="staff.startDate"
        v-validate="'required'"
      />
      <div
        v-if="submitted && errors.has('age')"
        class="invalid-feedback"
      >{{ errors.first('startDate') }}</div>
    </div>
    <div>
      <button class="btn btn-primary">Save changes</button>
    </div>
  </form>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import axios from "axios";

var qs = require("qs");

Vue.use(VeeValidate);

export default {
  name: 'editPerson',
  notifications: {
      showSuccessMsg: {
        type: "success",
        title: 'Notifycation',
        message: 'Update staff success'
      },
      showErrorMsg: {
        type: "error",
        title: 'Notifycation',
        message: 'Update staff fail'
      }
    },
  mounted() {
    
    var staffId = this.$route.params.id;
    if (!staffId) {
      return;
    }
    axios
      .get(process.env.api_url + "findById", {
        params: {
          id: this.$route.params.id
        }
      })
      .then(response => {
        this.staff = response.data;
      });
  },
  data() {
    return {
      submitted: false,
      staff: { position: "Developer", office: "Tokyo" }
    };
  },
  methods: {
    updateStaff: function() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          axios({
            method: "post",
            url: process.env.api_url + "updateStaff",
            data: qs.stringify(this.staff),
            headers: {
              "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
          }).then(response => {
            if (response.data) {
              this.showSuccessMsg();
              this.$router.push('/');
            } else {
              this.showErrorMsg();
            }
          });
        }
      });
    }
  }
};
</script>