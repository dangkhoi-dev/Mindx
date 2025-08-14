// ================================
// 1. GET - Lấy dữ liệu
// ================================
async function getAPI() {
    try {
        console.log("📥 Đang gọi GET API...");
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        
        if (!response.ok) {
            throw new Error(`Lỗi HTTP! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("✅ GET thành công:", data);
        return data;
    } catch (error) {
        console.error("❌ Lỗi GET:", error.message);
    }
}

// ================================
// 2. POST - Tạo dữ liệu mới
// ================================
async function postAPI() {
    try {
        console.log("📤 Đang gọi POST API...");
        
        const newPost = {
            title: 'Bài viết mới từ JavaScript',
            body: 'Đây là nội dung của bài viết mới.',
            userId: 1
        };
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost)
        });
        
        if (!response.ok) {
            throw new Error(`Lỗi HTTP! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("✅ POST thành công:", data);
        return data;
    } catch (error) {
        console.error("❌ Lỗi POST:", error.message);
        
    }
}

// ================================
// 3. PUT - Cập nhật dữ liệu
// ================================
async function putAPI() {
    try {
        console.log("🔄 Đang gọi PUT API...");
        
        const updatedPost = {
            id: 1,
            title: 'Bài viết đã được cập nhật',
            body: 'Nội dung đã được chỉnh sửa.',
            userId: 1
        };
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPost)
        });
        
        if (!response.ok) {
            throw new Error(`Lỗi HTTP! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("✅ PUT thành công:", data);
        return data;
    } catch (error) {
        console.error("❌ Lỗi PUT:", error.message);
    }
}

// ================================
// 4. DELETE - Xóa dữ liệu
// ================================
async function deleteAPI() {
    try {
        console.log("🗑️ Đang gọi DELETE API...");
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error(`Lỗi HTTP! status: ${response.status}`);
        }
        
        console.log("✅ DELETE thành công! Post đã được xóa");
        return true;
    } catch (error) {
        console.error("❌ Lỗi DELETE:", error.message);
    }
}

// ================================
// Chạy tất cả ví dụ
// ================================
async function runAllExamples() {
    console.log("🚀 Bắt đầu demo 4 phương thức API\n");
    
    // 1. GET - Lấy dữ liệu
    await getAPI();
    console.log("\n" + "=".repeat(50) + "\n");
    
    // 2. POST - Tạo mới
    await postAPI();
    console.log("\n" + "=".repeat(50) + "\n");
    
    // 3. PUT - Cập nhật
    await putAPI();
    console.log("\n" + "=".repeat(50) + "\n");
    
    // 4. DELETE - Xóa
    await deleteAPI();
    
    console.log("\n🎉 Hoàn thành demo tất cả phương thức API!");
}

// Chạy demo
runAllExamples();
  