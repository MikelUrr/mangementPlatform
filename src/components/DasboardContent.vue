<template> <!-- Top Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
        <TopNavBar />
    </nav>

    <div class="dashboard-content">
        <h1>Welcome to the Dashboard!</h1>
        <p>This is the content area of the dashboard.</p>
        <!-- Add your content here -->
    </div>
</template>

<script>
import TopNavBar from './../components/TopNavBar.vue';
export default {
    name: 'DashboardContent',
    // Add your component logic here 
    components: {
      
        TopNavBar,
      
    }
}
</script>

<style scoped>
.dashboard-content {
    padding: 20px;
    background-color: #f8f8f8;
}
</style>