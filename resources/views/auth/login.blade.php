<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Document</title>
</head>
<body>
    <header class="w-full h-24 bg-blue-950">
        <div class="w-5/6 h-full m-auto text-white flex items-center justify-between">
                <a href="/" className="text-xl" style="font-size: 1.7rem;">
                    Job Search
                    <i className="fas fa-briefcase ml-2"></i>
                </a>

                <span className="text-2xl" style="font-size: 1.7rem;">
                    LOGIN   
                </span>
        </div>
    </header>
</body>
</html>