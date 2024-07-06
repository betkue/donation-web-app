<?php

namespace App\Http\Controllers;
// use App\ModelsProduct;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use NotchPay\NotchPay;
use NotchPay\Payment;
use App\Models\Donation;
use NotchPay\Exception\ApiException;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    // public function initialise (Request $request): RedirectResponse
    // {
    //     NotchPay::setApiKey('sb.LudOJsz7kuivrDHaW86KCiKPYCXGc8HL');

    //     if ($request->price && $request->email && $request->name  ) {
    //         try {
    //             $payload = Payment::initialize([
    //                 'amount' => $request->price??100000,
    //                 'email' => $request->email??"betkuetjh@gmail.com",
    //                 'name' => $request->name??"inconu",
    //                 'currency' => 'XAF',
    //                 'reference' => now() . '-' . uniqid(),
    //                 'callback' => route('notchpay-callback'),
    //                 'description' => "Doation de "."$request->price??1000 de la part de :"."$request->name??inconu email :"."$request->email??betkuetjh@gmail.com",
    //             ]);

    //             return redirect($payload->authorization_url);
    //         } catch (\Throwable  $e) {
    //             session()->flash('error', __('Impossible de procéder au paiement, veuillez recommencer plus tard. Merci'));

    //             return back();
    //         }
    //     }else {

    //     }

    //     // return Redirect::route('profile.edit');
    // }
    //initialise __invoke
    public function __invoke(Request $request): RedirectResponse
    {
        NotchPay::setApiKey(env('NOTCHPAY_PUBLIC_KEY'));

        if ($request->amount && $request->email && $request->name) {
            $amount = $request->amount ?? 100000;
            $email = $request->email ?? "betkuetjh@gmail.com";
            $phone = $request->phone ?? "";
            $name = $request->name ?? "inconu";
            $ref = 'DONATION-' . now() . '-' . uniqid();
            $description = "Doation de " . "$amount" . "\n De la part de : " . "$name" . " \n Email : " . "$email \n Pour les demunis";
            try {
                $payload = Payment::initialize([
                    'amount' => $amount,
                    'email' => $email,
                    'name' => $name,
                    'currency' => 'XAF',
                    'reference' => $ref,
                    'callback' => route('notchpay-callback'),
                    'description' => $description,
                ]);

                // Create a new donation instance
                $donation = new Donation;

                // Set the donation properties
                $donation->name = $name;
                $donation->phone = $phone;
                $donation->email = $email;
                $donation->reference = $ref; // Replace with your unique reference
                $donation->description = $description;
                $donation->amount = $amount; // Set the donation amount
                $donation->state = 0; // Assuming state 0 represents a new donation

                // Save the donation to the database
                $donation->save();

                return redirect($payload->authorization_url);
            } catch (\Throwable  $e) {
                // dd("err");

                session()->flash('error', __('Impossible de procéder au paiement, veuillez recommencer plus tard. Merci'));
                return redirect(route('payment-error'));
            }
        } else {
            session()->flash('error', __('Impossible de procéder au paiement, veuillez recommencer plus tard. Merci'));
            // dd($request);
            return redirect(route('payment-error'));
        }


        // try {
        //     $payload = Payment::initialize([
        //         'amount' => $request->price,
        //         'email' => Auth::user()->email,
        //         'name' => Auth::user()->name,
        //         'currency' => 'XAF',
        //         'reference' => Auth::id() . '-' . uniqid(),
        //         'callback' => route('notchpay-callback'),
        //         'description' => $request->description,
        //     ]);

        //     return redirect($payload->authorization_url);
        // } catch (\Throwable  $e) {
        //     session()->flash('error', __('Impossible de procéder au paiement, veuillez recommencer plus tard. Merci'));

        //     return back();
        // }
    }
}
