from django.contrib.auth import authenticate
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            if user is not None:
                # Log the user in
                # Redirect to a success page
                return redirect('success_url_name')  # Replace with your success URL name
        # If authentication fails or form is invalid, show signup form with errors
        return render(request, 'signup.html', {'form': form, 'error_message': 'Invalid login'})
    else:
        form = UserCreationForm()
    
    return render(request, 'signup.html', {'form': form})
