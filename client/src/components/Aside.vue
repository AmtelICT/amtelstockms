<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="../assets/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">AMTEL DESK</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../assets/logo.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
            <router-link to="/" class="nav-link">
                <i class="fas fa-tachometer-alt nav-icon"></i>
                <p>
                Dashboard
                </p>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-building"></i>
              <p>
                Company Info
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/zone-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Zones</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/region-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Regions</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/district-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Districts</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/area-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Areas</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/location-type-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Location Types</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/location-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Locations</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/area-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>HQ Offices</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/area-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Departments</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/area-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sections</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>
                User Management
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/zone-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Users</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/region-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Change Password</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/region-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Reset Password</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/district-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Districts</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/area-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Area</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>