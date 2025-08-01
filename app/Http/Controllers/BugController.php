<?php

namespace App\Http\Controllers;

use App\Models\BugReports;
use Illuminate\Http\Request;

class BugController extends Controller
{
    public function createBugReport(Request $request)
    {
        $bugReport = new BugReports();

        $title = $request->input('title');
        $bugReport->title = $title;

        $description = $request->input('description');
        $bugReport->description = $description;

        $severity = $request->input('severity');
        $bugReport->severity = $severity;

        $bugReport->save();

        return redirect('/confirmation');
    }
}
