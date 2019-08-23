<template>
  <div class="container-fluid">
    <!-- Breadcrumbs-->
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
      </li>
      <li class="breadcrumb-item active">Overview</li>
    </ol>

    <!-- Icon Cards-->
    <!-- <div class="row">
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-primary o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-comments"></i>
            </div>
            <div class="mr-5">26 New Messages!</div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-warning o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-list"></i>
            </div>
            <div class="mr-5">11 New Tasks!</div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-success o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-shopping-cart"></i>
            </div>
            <div class="mr-5">123 New Orders!</div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-danger o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-life-ring"></i>
            </div>
            <div class="mr-5">13 New Tickets!</div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div> -->

    <!-- Area Chart Example-->
    <!-- <div class="card mb-3">
      <div class="card-header">
        <i class="fas fa-chart-area"></i>
        Area Chart Example
      </div>
      <div class="card-body">
        <canvas id="myAreaChart" width="100%" height="30"></canvas>
      </div>
      <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    </div> -->

    <!-- DataTables Example -->
    <div class="card mb-3">
      <div class="card-header">
        <nuxt-link :to="'/edit-person/'" class="btn btn-primary btn-add">
          <span>Add Staff</span>
        </nuxt-link>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dataList" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.position}}</td>
                <td>{{item.office}}</td>
                <td>{{item.age}}</td>
                <td>{{item.startDate}}</td>
                <td>
                  <nuxt-link :to="'/edit-person/' + item.id" class="btn btn-success">
                    <span>Edit</span>
                  </nuxt-link>
                  <b-button class="btn btn btn-danger" @click="deleteStaff(item.id)">Delete</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    </div>
    <!-- <b-modal id="pop_delete" title="Confirm"> -->
    <!-- <p class="my-4">Are you sure to delete it!</p> -->
    <!-- </b-modal> -->
  </div>
</template>

<script>
import axios from "axios";
import popDelete from "~/components/popup/popDelete";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
var qs = require("qs");
var $ = require('jquery');

export default {
  name: "HomePage",
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    this.getData();
  },
  components: {
    popDelete
  },
  methods: {
    getData(){
      axios
      .get(process.env.api_url + "findAll")
      .then(response => {
        this.dataList = response.data;
      });
    },
    deleteStaff(staffId) {
      this.staffId = staffId;
      this.$bvModal.msgBoxConfirm("Are you sure to delete?").then(value => {
        if (value) {
          axios({
            method: "post",
            url: process.env.api_url + "deleteById",
            data: qs.stringify({ id: this.staffId }),
            headers: {
              "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
          }).then(response => {
            this.getData();
          });
        }
      });
    }
  }
};
</script>
