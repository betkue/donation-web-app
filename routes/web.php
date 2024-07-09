<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\NotchPayCallBackController;
use App\Models\Donation;

Route::get('/', function () {
    $totalDonations = Donation::where('state', 1)->sum('amount');
    return Inertia::render('Welcome', [

        'totalDonations'=>$totalDonations,
    ]);
})->name('home');

Route::get('/error', function () {
    // $totalDonations = Donation::where('state', 1)->sum('amount');
    return Inertia::render('Welcome',[]);
});

// Route::get('/payment-error', function () {

//     return Inertia::render('ErrorPayement');
// })->name('payment-error');


Route::get('/payment-success', function () {
    return Inertia::render('SuccessPayement');
})->name('payment-success');

Route::get('/payment', PaymentController::class)->name('payment');
// Route::get('payment/error', PaymentController::class,)->name('payment-error');
Route::get('/callback-payment', NotchPayCallBackController::class)->name('notchpay-callback');
// Route::get('/payment', function () {
//     $rave = new Rave($this->flwPublic, $this->flwSecret);

//     $data = [
//         'txRef' => uniqid(),
//         'amount' => 100, // Amount in Naira
//         'customerName' => 'John Doe',
//         'customerEmail' => 'johndoe@example.com',
//         'paymentOptions' => 'card,mobilemoney,banktransfer', // Comma-separated list of payment options
//         'redirectURL' => route('callback'), // URL to redirect to after payment
//     ];

//     $paymentForm = $rave->createPaymentForm($data);

//     return view('payment', ['paymentForm' => $paymentForm]);
// });

// Route::get('/callback', function () {
//     $rave = new Rave($this->flwPublic, $this->flwSecret);

//     $data = $_POST; // Get POST data from Flutterwave
//     $status = $rave->verifyTransaction($data);

//     if ($status['status'] === 'success') {
//         // Payment successful, update order status in database
//         $orderId = $data['txRef']; // Get order ID from transaction reference
//         $order = Order::find($orderId);
//         $order->status = 'paid';
//         $order->save();
//     } else {
//         // Payment failed, handle error
//         echo $status['message'];
//     }
// });



// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
