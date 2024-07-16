<template>
    <div>
       

        <div class="container-fluid">
            <div class="row flex-nowrap">
                <!-- Side Menu -->
                <div class="col-md-3 col-lg-2 bg-light sidebar p-0">
                    <Sidemenu />
                </div>

                <!-- Main Content -->
                <main role="main" class="col-md-9 col-lg-10 px-4">
                    <DasboardContent />
                </main>
            </div>
        </div>

        <!-- Footer -->
        <footer class="footer mt-auto py-3 bg-light w-100">
            <ContentFooter />
        </footer>
    </div>
</template>

<script>
import Sidemenu from './../components/SidemenuPlugin/Sidemenu.vue';
import DasboardContent from './../layout/DasboardContent.vue';
import ContentFooter from './../layout/ContentFooter.vue';

export default {
    components: {
        Sidemenu,
       
        DasboardContent,
        ContentFooter
    }
}
</script>

<style scoped>
.sidebar {
    height: 100vh;
}
</style>