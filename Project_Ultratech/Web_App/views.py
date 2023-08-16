from django.shortcuts import render,redirect, HttpResponseRedirect,get_object_or_404

# Create your views here.
def home(request):
    return render(request, 'index.html')

def setting(request):
    return render(request, 'setting.html')

def video(request):
    return render(request, 'video.html')


from django.shortcuts import render, redirect
from .forms import FileUploadForm
from .models import UploadedFile

def upload_file(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('file_list')
    else:
        form = FileUploadForm()
    return render(request, 'upload_file.html', {'form': form})

def file_list(request):
    files = UploadedFile.objects.all()
    return render(request, 'file_list.html', {'files': files})


from django.core.cache import cache

# Storing data in the cache
cache.set("my_key", "my_value", timeout=3600)  # Cache for 1 hour

# Retrieving data from the cache
cached_value = cache.get("my_key")
