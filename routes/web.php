<?php

use App\Http\Controllers\BugController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('bugReportForm');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/confirmation', function () {
    return Inertia::render('submitConfirmation');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
