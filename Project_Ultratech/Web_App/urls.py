from django.urls import path
from Web_App import  views

urlpatterns =[
    
    path('',views.home,name='home'),
    path('setting',views.setting,name='setting'),
    path('video',views.video,name='video'),
    path('upload/', views.upload_file, name='upload_file'),
    path('files/', views.file_list, name='file_list'),
    
]
