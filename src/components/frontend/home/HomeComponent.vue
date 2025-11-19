<template>
    <div class="flex min-h-screen bg-gray-100">

        <!-- Mobile Toggle Button -->
        <button class="md:hidden fixed top-4 left-4 z-20 bg-gray-800 text-white p-2 rounded" @click="isOpen = true">
            ☰
        </button>

        <!-- Sidebar (Desktop) -->
        <aside class="w-64 bg-white border-r hidden md:block">
            <div class="p-4 text-xl font-bold border-b">
                Dashboard
            </div>

            <nav class="p-4 space-y-2">
                <a href="#" class="block p-2 rounded hover:bg-gray-100">Home</a>
                <a href="#" class="block p-2 rounded hover:bg-gray-100">Users</a>
                <a href="#" class="block p-2 rounded hover:bg-gray-100">Orders</a>
                <a href="#" class="block p-2 rounded hover:bg-gray-100">Settings</a>
            </nav>
        </aside>

        <!-- Sidebar (Mobile) -->
        <aside
            class="fixed inset-y-0 left-0 w-64 bg-white border-r z-30 transform transition-transform duration-300 md:hidden"
            :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
            <div class="p-4 text-xl font-bold border-b flex justify-between items-center">
                Dashboard
                <button class="text-xl bg-gray-200 p-1 rounded hover:bg-gray-300" @click="isOpen = false">
                    ✕
                </button>
            </div>

            <nav class="p-4 space-y-2">
                <a href="#" class="block p-2 rounded hover:bg-gray-100">Home</a>
                <a href="#" class="block p-2 rounded hover:bg-gray-100">Users</a>
                <a href="#" class="block p-2 rounded hover:bg-gray-100">Orders</a>
                <a href="#" class="block p-2 rounded hover:bg-gray-100">Settings</a>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-6">
            <h1 class="text-3xl font-bold mb-4">Dashboard Body</h1>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded shadow">Card 1</div>
                <div class="bg-white p-4 rounded shadow">Card 2</div>
                <div class="bg-white p-4 rounded shadow">Card 3</div>
            </div>
        </main>

    </div>
</template>

<script>
export default {
    name: "DashboardLayout",

    data() {
        return {
            isOpen: false,
        };
    },
};
</script>