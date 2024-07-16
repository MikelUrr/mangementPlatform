<template>
    <footer class="content-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>&copy; {{ currentYear }} Your Company. All rights reserved.</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-inline text-md-right">
                        <li class="list-inline-item"><a href="#">Terms of Service</a></li>
                        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                        <li class="list-inline-item"><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'ContentFooter',
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
};
</script>

<style scoped>
.content-footer {
    background-color: #f8f9fa;
    padding: 20px 0;
    margin-top: 20px;
}
</style>