@@ .. @@
   return (
-    <motion.div
-      initial={{ opacity: 0, y: 20, scale: 0.9 }}
-      animate={{ opacity: 1, y: 0, scale: 1 }}
-      className="fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden"
-    >
+    <motion.div
+      initial={{ opacity: 0, y: 20, scale: 0.9 }}
+      animate={{ opacity: 1, y: 0, scale: 1 }}
+      className="fixed bottom-4 right-4 w-80 sm:w-96 h-[400px] sm:h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden max-w-[calc(100vw-2rem)]"
+    >
       {/* Header */}
       <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
         <div className="flex items-center justify-between">
           <div className="flex items-center space-x-3">
             <div className="relative">
-              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
-                <Bot className="w-6 h-6" />
+              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
+                <Bot className="w-4 h-4 sm:w-6 sm:h-6" />
               </div>
               <motion.div
-                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
+                className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
               />
             </div>
             <div>
-              <h3 className="font-semibold">AI Assistant</h3>
-              <p className="text-xs opacity-90">Powered by WebStitch AI</p>
+              <h3 className="text-sm sm:text-base font-semibold">AI Assistant</h3>
+              <p className="text-xs opacity-90 hidden sm:block">Powered by WebStitch AI</p>
             </div>
           </div>
           <button
             onClick={() => setIsMinimized(true)}
-            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
+            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
           >
             <X className="w-5 h-5" />
           </button>
@@ -174,7 +174,7 @@
       </div>
 
       {/* Messages */}
-      <div className="flex-1 overflow-y-auto p-4 space-y-4">
+      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
         <AnimatePresence>
           {messages.map((message) => (
             <motion.div
@@ -186,7 +186,7 @@
               className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
             >
               <div className={`flex items-start space-x-2 max-w-[80%] ${
                 message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
               }`}>
-                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
+                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                   message.sender === 'user' 
                     ? 'bg-blue-600 text-white' 
                     : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                 }`}>
                   {message.sender === 'user' ? (
-                    <User className="w-4 h-4" />
+                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                   ) : (
-                    <Bot className="w-4 h-4" />
+                    <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                   )}
                 </div>
-                <div className={`px-4 py-2 rounded-2xl ${
+                <div className={`px-3 sm:px-4 py-2 rounded-2xl ${
                   message.sender === 'user'
                     ? 'bg-blue-600 text-white'
                     : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                 }`}>
-                  <p className="text-sm">{message.text}</p>
-                  <p className="text-xs opacity-70 mt-1">
+                  <p className="text-xs sm:text-sm">{message.text}</p>
+                  <p className="text-xs opacity-70 mt-1 hidden sm:block">
                     {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                   </p>
                 </div>
@@ -220,7 +220,7 @@
             className="flex justify-start"
           >
             <div className="flex items-start space-x-2">
-              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center">
-                <Bot className="w-4 h-4" />
+              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center">
+                <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
               </div>
-              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl">
+              <div className="bg-gray-100 dark:bg-gray-700 px-3 sm:px-4 py-2 rounded-2xl">
                 <div className="flex space-x-1">
                   <motion.div
-                    className="w-2 h-2 bg-gray-400 rounded-full"
+                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"
                     animate={{ scale: [1, 1.2, 1] }}
                     transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                   />
                   <motion.div
-                    className="w-2 h-2 bg-gray-400 rounded-full"
+                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"
                     animate={{ scale: [1, 1.2, 1] }}
                     transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                   />
                   <motion.div
-                    className="w-2 h-2 bg-gray-400 rounded-full"
+                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"
                     animate={{ scale: [1, 1.2, 1] }}
                     transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                   />
@@ -250,7 +250,7 @@
       </div>
 
       {/* Quick Actions */}
-      <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
-        <div className="flex flex-wrap gap-2 mb-2">
+      <div className="px-3 sm:px-4 py-2 border-t border-gray-200 dark:border-gray-700">
+        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
           {quickActions.slice(0, 2).map((action, index) => (
             <motion.button
               key={action}
               onClick={() => handleSendMessage(action)}
-              className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
+              className="text-xs px-2 sm:px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
@@ -268,7 +268,7 @@
       </div>
 
       {/* Input */}
-      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
+      <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
         <div className="flex space-x-2">
           <input
             type="text"
@@ -276,7 +276,7 @@
             onChange={(e) => setInputText(e.target.value)}
             onKeyPress={handleKeyPress}
             placeholder="Ask about AI and automation..."
-            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
+            className="flex-1 px-2 sm:px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-xs sm:text-sm"
           />
           <motion.button
             onClick={() => handleSendMessage()}
             disabled={!inputText.trim() || isTyping}
-            className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
+            className="px-2 sm:px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
-            <Send className="w-4 h-4" />
+            <Send className="w-3 h-3 sm:w-4 sm:h-4" />
           </motion.button>
         </div>
       </div>