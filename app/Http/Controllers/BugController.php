<?php

namespace App\Http\Controllers;

use App\Models\BugReports;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BugController extends Controller
{
    public function createBugReport()
    {
        return Inertia::render('bugReportForm');
    }

    public function storeBugReport(Request $request)
    {
        // because Laravel isnt the focus I didnt include a validator 
        $title = $request->input('title');
        $description = $request->input('description');
        $severity = $request->input('severity');

        if (!$title) {
            return Inertia::render('bugReportForm', [
                'validationError' => 'You need a title.'
            ]);
        }

        $bugReport = new BugReports();

        $bugReport->title = $title;
        $bugReport->description = $description ?? '';
        $bugReport->severity = $severity;

        $bugReport->save();

        return redirect('/confirmation');
    }
}
