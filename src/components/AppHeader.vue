<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="nav navbar-nav">
        <a href="#" class="nav-item nav-link active">Home</a>
        <a href="#" class="nav-item nav-link">Product</a>
      </div>
      <div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle"
            type="button" 
            id="triggerId"
            data-bs-toggle="dropdown"  
            aria-haspopup="true"
            aria-expanded="false"
          >Dropdown</button>
          <div class="dropdown-menu" aria-labelledby="triggerId">
            <button class="dropdown-item" href="#">Action</button>
            <button class="dropdown-item disabled" href="#">Disable action</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>
